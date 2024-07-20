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
import "./App.css";

const ConfirmedBooking = lazy(() => import("./components/ConfirmedBooking"));
const LogIn = lazy(() => import("./pages/LogIn"));

const LoadingFallback = () => (
  <div className="text-center text-lg font-semibold flex items-center justify-center">
    Loading...
  </div>
);

export default function App() {
  return (
    <>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomeLayout />}></Route>

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
      </Suspense>
    </>
  );
}
