import instance from "./index";

const getPets = async () => {
  const res = await instance.get("pets");
  return res.data;
};

const addPet = async (name, image, type, adopted) => {
  const res = await instance.post("pets", {
    name: name,
    adopted: adopted,
    image: image,
    type: type,
  });
  return res.data;
};

const updatePet = async (petId, name, image, type, adopted) => {
  await instance.put(`pets/${petId}`, {
    name: name,
    image: image,
    type: type,
    adopted: 1,
  });
};

const getPetById = async (id) => {
  const res = await instance.get(`pets/${id}`);
  return res.data;
};

const deletePet = async (petId) => {
  const res = await instance.delete(`pets/${petId}`);
  return res.data;
};
export { getPets, addPet, updatePet, getPetById, deletePet };
