import { getUserAccounts } from "@/actions/dashboard";
import { defaultCategories } from "@/data/categories";
import React from "react";
import AddTransactionForm from "../_components/transaction-form";
import { getTransaction } from "@/actions/transaction";

const AddTransactionPage = async ({ searchParams }) => {
  const accounts = await getUserAccounts();

  // Fixed: Await searchParams before accessing properties
  const resolvedSearchParams = await searchParams;
  const editId = resolvedSearchParams?.edit;

  let initialData = null;
  if (editId) {
    try {
      const transaction = await getTransaction(editId);
      initialData = transaction;
    } catch (error) {
      console.error("Failed to fetch transaction:", error);
      // Handle error gracefully - maybe redirect or show error message
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-5">
      <h1 className="text-5xl gradient-title mb-8">
        {editId ? "Edit" : "Add"} Transaction
      </h1>

      <AddTransactionForm
        accounts={accounts}
        categories={defaultCategories}
        editMode={!!editId}
        initialData={initialData}
      />
    </div>
  );
};

export default AddTransactionPage;
