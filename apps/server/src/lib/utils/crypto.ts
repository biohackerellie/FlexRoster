export function getHashKey(_filter: string | null | undefined) {
  const hasher = new Bun.CryptoHasher("sha256");
  let retKey = "";
  if (_filter) {
    const text = JSON.stringify(_filter);
    retKey = hasher.update(text).digest("hex");
  }
  return "CACHE_" + retKey;
}

