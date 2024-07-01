import mongoose from 'mongoose';

const MembreSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  nom: { type: String, required: true },
  prenom: { type: String },
  numero: { type: String },
  titre: { type: String },
  motDePasse: { type: String, required: true },
  roles: [{
    projet: { type: mongoose.Schema.Types.ObjectId, ref: 'Projet' },
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' }
  }]
});

const Membre = mongoose.model('Membre', MembreSchema);
export default Membre;
