#!/usr/bin/env node

import { exec } from "child_process";
import { consola } from "consola";
import fs from "fs-extra";
import path from "path";

const REPO_URL = "https://github.com/Pkcarreno/astro-minimal-template.git";

const FILES_TO_REMOVE = [
  ".github",
  ".git",
  "README.md",
  "cli",
  "LICENSE",
  "pnpm-lock.yaml",
];

async function createAstroMinimal() {
  consola.box("Astro Minimal Template");

  const projectName = await consola.prompt("Project name?", {
    type: "text",
  });

  if (!projectName) {
    consola.error("Please provide a name for your project");
    process.exit(1);
  }

  const getProjectPath = await consola.prompt("Project path?", {
    placeholder: `./${projectName}`,
  });

  const projectPath = getProjectPath || projectName;

  const tartgetPath = path.join(process.cwd(), projectPath);

  if (fs.existsSync(tartgetPath)) {
    consola.error(
      "Project path already exists, please choose another one or delete the existing one",
    );
    process.exit(1);
  }

  await cloneTemplate(tartgetPath);

  await setupProject(projectName, tartgetPath);

  await installDeps(tartgetPath);
}

createAstroMinimal();

async function cloneTemplate(tartgetPath) {
  consola.start("Cloning template");

  const cloneStarter = `git clone --depth=1 ${REPO_URL} ${tartgetPath}`;

  await runCommand(cloneStarter, {
    loading: "Extracting the starter template...",
    success: "Starter extracted successfully",
    error: "Failed to download and extract template",
  });
}

async function setupProject(projectName, tartgetPath) {
  consola.start("Clean up and setup your project");
  try {
    await removeFiles(tartgetPath);
    await updatePackageInfos(projectName, tartgetPath);
    await initGit(tartgetPath);
    consola.success("Clean up and setup your project");
  } catch (error) {
    consola.error("Failed to clean up project folder", error);
    process.exit(1);
  }
}

const installDeps = async (projectPath) => {
  const shouldInstallDependencies = await consola.prompt(
    "Install dependencies?",
    {
      type: "confirm",
    },
  );

  if (shouldInstallDependencies) {
    const packageManager = await consola.prompt("Choose package manager", {
      type: "select",
      options: ["npm", "yarn", "pnpm"],
    });

    await runCommand(`cd ${projectPath} && ${packageManager} install`, {
      loading: "Installing  project dependencies",
      success: "Dependencies installed",
      error: "Failed to install dependencies",
    });
  }
};

async function removeFiles(projectPath) {
  FILES_TO_REMOVE.forEach((file) => {
    fs.removeSync(path.join(projectPath, file));
  });
}

const initGit = async (projectPath) => {
  const currentPath = process.cwd();
  await execShellCommand(`cd ${projectPath} && git init && cd ${currentPath}`);
};

const updatePackageInfos = async (projectName, projectPath) => {
  const packageJsonPath = path.join(projectPath, "package.json");
  const packageJson = fs.readJsonSync(packageJsonPath);
  packageJson.osMetadata = { initVersion: packageJson.version };
  packageJson.version = "0.0.1";
  packageJson.name = projectName?.toLowerCase();
  packageJson.repository = {
    type: "git",
    url: "git+https://github.com/user/repo-name.git",
  };
  fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });
};

const execShellCommand = (cmd) => {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
        reject(error);
      }
      resolve(stdout ? stdout : stderr);
    });
  });
};

const runCommand = async (
  command,
  { loading = "loading ....", success = "success", error },
) => {
  consola.start(loading);
  try {
    await execShellCommand(command);
    consola.success(success);
  } catch (err) {
    consola.error(error ? error : `Failed to execute ${command}`, err);
    process.exit(1);
  }
};
