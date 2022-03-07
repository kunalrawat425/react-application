let persons = [
  { Gender: "Male", HeightCm: 171, WeightKg: 96 },
  { Gender: "Male", HeightCm: 161, WeightKg: 85 },
  { Gender: "Male", HeightCm: 180, WeightKg: 77 },
  { Gender: "Female", HeightCm: 166, WeightKg: 62 },
  { Gender: "Female", HeightCm: 150, WeightKg: 70 },
  { Gender: "Female", HeightCm: 167, WeightKg: 82 },
];

const BMICategory = [
  { minValue: "0", maxValue: "18.4", category: "Underweight" },
  { minValue: "18.5", maxValue: "24.9", category: "Normal weight" },
  { minValue: "25", maxValue: "29.9", category: "Overweight" },
  { minValue: "30", maxValue: "34.9", category: "Moderately obese" },
  { minValue: "35", maxValue: "39.9", category: "Severel obese" },
  { minValue: "40", maxValue: "100", category: "Very severely obese" },
];

const HealthRisk = [
  { minValue: "0", maxValue: "18.4", riskType: "Malnutrition risk" },
  { minValue: "18.5", maxValue: "24.9", riskType: "Low risk" },
  { minValue: "25", maxValue: "29.9", riskType: "Enhanced risk" },
  { minValue: "30", maxValue: "34.9", riskType: "Medium risk" },
  { minValue: "35", maxValue: "39.9", riskType: "High risk" },
  { minValue: "40", maxValue: "100", riskType: "Very High risk" },
];

// --------------------------------------------------------------------

// Calculate BMI, BMI cat. ,Health Risk
//Total no. of overweight people using ranges
// Create build, tests to make sure the code is working as expected and this can be added to
// an automation build / test / deployment pipeline

const getHeightInMeters = (height) => (height / 100).toFixed(2);

const getBMI = (height, weight) =>
  (weight / getHeightInMeters(height)).toFixed(2);

// const getBMICategory = (BMI) =>
//   persons.find((person) => {BMI <= person.maxValue);

const getHealthRisk = (BMI) => (weight / getHeightInMeters(height)).toFixed(2);

for (person of persons) {
  person.BMI = getBMI(person.HeightCm, person.WeightKg);
//   person.BMICategory = getBMICategory(person.BMI);
//   person.HealthRisk = getHealthRisk(person.BMI);
}

for (person of persons) {
  console.log(person.bmi);
}

// totalOverWeight