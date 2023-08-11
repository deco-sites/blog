import moment from "https://deno.land/x/momentjs@2.29.1-deno/mod.ts";

export const formatDate = (date: string | undefined): string => {
  const mDate = moment(date);
  if (!mDate.isValid()) {
    return "";
  }

  return mDate.format("DD MMM, YYYY");
};
