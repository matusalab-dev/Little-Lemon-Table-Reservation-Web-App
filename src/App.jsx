import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Booking } from "./pages/Booking";
import { CustomerForm } from "./pages/CustomerForm";
import { OrderDetail } from "./pages/OrderDetail";
import { NotFound } from "./pages/NotFound";

import { HomeLayout } from "./layouts/HomeLayout";
import { BookingLayout } from "./layouts/BookingLayout";
import { OrderLayout } from "./layouts/OrderLayout";
import { LogInLayout } from "./layouts/LogInLayout";

import LoadingSpinner from "./components/LoadingSpinner";

import "./App.css";

const ConfirmedBooking = lazy(() => import("./components/ConfirmedBooking"));
const LogIn = lazy(() => import("./pages/LogIn"));

export default function App() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomeLayout />} />

          <Route path="order" element={<OrderLayout />}>
            <Route path=":id" element={<OrderDetail />} />
            <Route path="order-confirmation" element={<ConfirmedBooking />} />
          </Route>

          <Route path="reserve" element={<BookingLayout />}>
            <Route index element={<Booking />} />
            <Route path="customer-form" element={<CustomerForm />} />

            <Route path="booking-confirmation" element={<ConfirmedBooking />} />
          </Route>

          <Route path="log-in" element={<LogInLayout />}>
            <Route index element={<LogIn />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
