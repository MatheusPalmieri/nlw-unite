import { attendees } from "../db/attendees";

export function database() {
  const dataExist = localStorage.getItem("attendees");

  if (!dataExist) {
    localStorage.setItem("attendees", JSON.stringify(attendees));
    return attendees;
  }

  return JSON.parse(dataExist);
}
