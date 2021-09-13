export const fetchBookings = () =>
  $.ajax({
    method: "GET",
    url: "api/bookings",
  });

export const fetchBooking = bookingId =>
  $.ajax({
    method: "GET",
    url: `api/bookings/${bookingId}`,
  });

export const createBooking = booking =>
  $.ajax({
    method: "POST",
    url: "api/bookings",
    data: { booking },
  });

export const deleteBooking = bookingId =>
  $.ajax({
    method: "DELETE",
    url: `api/bookings/${bookingId}`,
  });
