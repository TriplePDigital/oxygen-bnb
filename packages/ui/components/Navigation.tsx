import React from "react";

export const Navigation = () => {
  return (
    <nav className="w-full border-b h-16">
      <div className="container items-center flex justify-between mx-auto h-full">
      <span className="w-1/2">
        <a href="/" className="text-2xl font-bold">
          <span className="text-blue-500">Oxygen</span>BnB
        </a>
      </span>
      <ul className="flex justify-between w-1/2 ml-auto">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/properties">Properties</a>
        </li>
        <li>
          <a href="/reservations">Reservations</a>
        </li>
        <li>
          <a href="/account">Account</a>
        </li>
        <li>
          <a href="/auth/login">Log in</a>
        </li>
        <li>
          <a href="/auth/register">Register</a>
        </li>
      </ul>
      </div>
    </nav>
  );
}