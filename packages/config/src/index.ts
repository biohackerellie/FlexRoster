export const secretaries = [
  "rachel_gappa@laurel.k12.mt.us",
  "marita_grammar@laurel.k12.mt.us",
  "brandi_fox@laurel.k12.mt.us",
  "hsmessage@laurel.k12.mt.us",
  "admin@laurel.k12.mt.us",
  "stacy_hall@laurel.k12.mt.us",
  "john_stilson@laurel.k12.mt.us",
] as const;

export const prefferedNames = [
  { givenName: "Carol Leinwand", prefferedName: "Jeannie Leinwand" },
  { givenName: "Donna Kegel", prefferedName: "Evawn Kegel" },
] as const;

export const excludedTeachers = ["Brandi Fox", "Fox, Brandi"] as const;

export const semesterClassName = "STEAM-B" as const;

export const isRedisCluster: boolean = true;
