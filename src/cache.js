const cache = require("@actions/cache");
const github = require("@actions/github");
const os = require("os");

const CACHE_PATHS = ["~/.foundry/cache/rpc"];

async function restoreRPCCache() {
  const platform = os.platform();
  const key = platform + "-foundry-chain-fork-" + github.context.sha;
  const restoreKeys = [platform + "-foundry-chain-fork-"];
  await cache.restoreCache(CACHE_PATHS, key, restoreKeys);
}

async function saveCache() {
  const platform = os.platform();
  const key = platform + "-foundry-chain-fork-" + github.context.sha;
  await cache.saveCache(CACHE_PATHS, key);
}

module.exports = {
  restoreRPCCache,
  saveCache,
};
