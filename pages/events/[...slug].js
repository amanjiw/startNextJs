import React from "react";
import { useRouter } from "next/router";

import { getFilteredEvents } from "../../dummy-data";

// ## =>
function FilteredEventsPage() {
  const router = useRouter();
  const filteredData = router.query.slug;

  if (!filteredData) {
    <p className="center">loading :) </p>;
  }

  const filteredYear = Number(filteredData[0]);
  const filteredMonth = Number(filteredData[1]);

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return <p>Invalide Filter</p>;
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No Events Found :(</p>;
  }

  //
  return (
    <>
      <h1>Slug page...</h1>
    </>
  );
}

export default FilteredEventsPage;
