#!/usr/bin/env node

import { exec } from "child_process";
import { consola } from "consola";
import fs from "fs-extra";
import path from "path";

const REPO_URL = "https://github.com/Pkcarreno/astro-minimal-template.git";

const FILES_TO_REMOVE = [
  ".github/workflows/release.yml",
  ".github/workflows/publish-to-npmjs.yaml",
  ".git",
  "README.md",
  "README-ES.md",
  "cli",
  "LICENSE",
  "CHANGELOG.md",
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

  const projectPath = await getProjectPath(projectName);

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

  await finalMessage(tartgetPath);
}

createAstroMinimal();

async function getProjectPath(projectName) {
  const inputPath = await consola.prompt("Project path?", {
    placeholder: `./${projectName}`,
  });

  return inputPath || projectName;
}

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
    await updateProjectConfig(tartgetPath);
    await initGit(tartgetPath);
    consola.success("Clean up and setup your project");
  } catch (error) {
    consola.error("Failed to clean up project folder", error);
    process.exit(1);
  }
}

const installDeps = async (projectPath) => {
  await runCommand(`cd ${projectPath} && pnpm install`, {
    loading: "Installing project dependencies",
    success: "Dependencies installed",
    error: "Failed to install dependencies, Make sure you have pnpm installed",
  });
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

const updateProjectConfig = async (projectPath) => {
  const readmeFilePath = path.join(projectPath, `README-PROJECT.md`);
  fs.renameSync(readmeFilePath, path.join(projectPath, `README.md`));
};

const finalMessage = async (projectPath) => {
  consola.success("\nYour project is ready to go! \n");
  consola.log(
    "To get started, run:\n\n",
    `  \`cd ${projectPath} && pnpm dev\`\n\n`,
  );
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
