import React from "react";
import Layout from "../components/layout/layout";
import UpdateForm from "../components/dashboard/UpdateForm";
import { useParams } from "react-router";
const UpdateProductPage = () => {
  const params = useParams();
  return (
    <Layout>
      <UpdateForm id={params["id"]} />
    </Layout>
  );
};

export default UpdateProductPage;
