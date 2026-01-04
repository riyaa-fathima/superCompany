import mongoose from "mongoose";

const SaleSchema = new mongoose.Schema(
  {
    saleName: { type: String, required: true },
    status: { type: String, required: true },
    amount: { type: Number, required: true },
    stage: { type: String, required: true },
    nextActivityDate: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Sale ||
  mongoose.model("Sale", SaleSchema);
