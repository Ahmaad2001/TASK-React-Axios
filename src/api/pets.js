import instance from "./index";

const getPets = async () => {
  const pets = await instance.get("pets");
  return pets;
};

const addPet = async (name, image, type, adopted) => {
  const res = await instance.post("pets", {
    name: name,
    adopted: adopted,
    image: image,
    type: type,
  });
  return res;
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

export { getPets, addPet, updatePet, getPetById };
