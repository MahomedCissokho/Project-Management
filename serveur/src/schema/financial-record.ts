import mongoose from "mongoose";

interface FinancialRecord {
  userId: string;
  date: Date;
  description: string;
  montant: number;
  categorie: string;
  tache: string;
  statutDepense :String;

}

const financialRecordSchema = new mongoose.Schema<FinancialRecord>({
  userId: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  montant: { type: Number, required: true },
  categorie: { type: String, required: true },
  tache: { type: String, required: true },
  statutDepense: { type: String, required: true },

});

const FinancialRecordModel = mongoose.model<FinancialRecord>(
  "FinancialRecord",
  financialRecordSchema
);

export default FinancialRecordModel;
