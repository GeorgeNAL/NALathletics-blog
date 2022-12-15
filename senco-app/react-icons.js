const Fs = require("fs");
const Path = require("path");

module.exports = (name) => {
  const prefix = "react-icons-all-files";
  const iconsPrefix = {
    ai: "Ai",
    bi: "Bi",
    bs: "Bs",
    cg: "Cg",
    di: "Di",
    fa: "Fa",
    fc: "Fc",
    fi: "Fi",
    gi: "Gi",
    go: "Go",
    gr: "Gr",
    hi: "Hi",
    hi2: "Hi",
    im: "Im",
    io: "IoIos",
    io5: "Io",
    md: "Md",
    ri: "Ri",
    si: "Si",
    tb: "Tb",
    ti: "Ti",
    vsc: "Vsc",
    wi: "Wi",
  };

  for (let dir in iconsPrefix) {
    if (name.indexOf(iconsPrefix[dir]) === 0) {
      const path = Path.join(
        __dirname,
        "node_modules",
        prefix + `/${dir}/` + name + ".js",
      );

      if (Fs.existsSync(path)) {
        return Path.join(prefix, dir, name + ".js");
        // return prefix + `/${dir}/` + name + ".js";
      }
    }
  }
  return Path.join(prefix, name + ".js");
  // return prefix
};
