import React from "react";
import { Routes, Route } from "react-router-dom";

import CreateApplicationForm from "./Pages/CreateApplicationForm";
import TrackApplication from "./Pages/TrackApplication";

const NotFound = () => (
  <div className="text-center">
    Oops, what you are looking for, does not exist.
  </div>
);

const RoutePath = () => (
  <Routes>
    <Route path="/" element={<TrackApplication />} />
    <Route path="/CreateApplicationForm" element={<CreateApplicationForm />} />
    <Route path="/TrackApplication" element={<TrackApplication />} />
    <Route path="*" element={<NotFound />} />
</Routes>
);

export default RoutePath;
