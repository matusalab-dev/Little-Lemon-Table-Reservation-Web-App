import React from "react";
import { Routes, Route } from "react-router-dom";
import { Booking } from "./pages/Booking";
import { HomeLayout } from "./components/HomeLayout";
import { BookingLayout } from "./components/BookingLayout";
import { OrderDetail } from "./pages/OrderDetail";
import { OrderLayout } from "./components/OrderLayout";
// import ConfirmedBooking from "./components/ConfirmedBooking";
import { CustomerForm } from "./pages/CustomerForm";
// import { LogIn } from "./pages/LogIn";
import { LogInLayout } from "./components/LogInLayout";
import { NotFound } from "./pages/NotFound";
import "./App.css";

const ConfirmedBooking = React.lazy(() =>
  import("./components/ConfirmedBooking")
);
const LogIn = React.lazy(() => import("./pages/LogIn"));

const LoadingFallback = () => <div>Loading...</div>;

export default function App() {
  return (
    <>
      <React.Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="about" />
            <Route path="menu" />
          </Route>

          <Route path="order/:id/:category" element={<OrderLayout />}>
            <Route index element={<OrderDetail />}></Route>
            <Route path="ConfirmedBooking" element={<ConfirmedBooking />} />
          </Route>
          <Route path="/reserve" element={<BookingLayout />}>
            <Route index element={<Booking />} />
            <Route path="CustomerForm" element={<CustomerForm />} />
            {/* lazy loaded components */}
            <Route path="ConfirmedBooking" element={<ConfirmedBooking />} />
          </Route>

          {/* lazy loaded components */}
          <Route path="/log-in" element={<LogInLayout />}>
            <Route index element={<LogIn />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </>
  );
}
