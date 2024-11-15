export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unspecified = 'Unspecified',
}

export enum FitnessProgram {
  FatLoss = 'fat loss',
  SeniorFitness = 'senior fitness',
  MuscleGain = 'muscle gain',
  PrePostnatalFitness = 'pre/postnatal fitness',
  ContestPreparation = 'contest preparation',
  OverallFitness = 'overall fitness',
}

export interface Client {
  clientID: string;
  name: string;
  DOB: Date;
  gender: Gender;
  fitnessProgram: FitnessProgram;
  contactInfo: string;
  joinedDate: Date;
  endingDate: Date;
  specialHealthNotes?: string;
  isVIP: boolean;
}
