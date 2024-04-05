import { Attendees } from "../interfaces/attendees";
import { database } from "./database";

export function getAttendees(
  page: number,
  limit: number = 10,
  searchParams: string = ""
): {
  data: Attendees[];
  total: number;
  page: number;
  pages: number;
} {
  const attendees = database();

  if (searchParams) {
    const attendeesFiltered = attendees.filter((attendee: Attendees) => {
      const searchParamLower = searchParams.toLowerCase();
      for (const field of ["name", "email", "id"]) {
        const fieldValue = attendee[field as keyof Attendees]
          .toString()
          .toLowerCase();
        if (fieldValue.includes(searchParamLower)) {
          return true;
        }
      }
      return false;
    });

    return {
      data: attendeesFiltered.slice((page - 1) * limit, page * limit),
      total: attendeesFiltered.length,
      page: page,
      pages: Math.ceil(attendeesFiltered.length / limit),
    };
  }

  return {
    data: attendees.slice((page - 1) * limit, page * limit),
    total: attendees.length,
    page: page,
    pages: Math.ceil(attendees.length / limit),
  };
}
