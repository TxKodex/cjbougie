import type { MetaFunction, ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";

export const handle = { noLayout: true };

export default function Lazone() {
  return (
    <div className="dashboard">
      <div className="dashboard__left"></div>
      <div className="dashboard__right"></div>
    </div>
  );
}
