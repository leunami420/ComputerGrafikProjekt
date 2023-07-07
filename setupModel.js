// setupModel.js
import { MeshStandardMaterial } from 'three';

export function setupModel(data, gltf) {
  const model = gltf.scene;
  const materials = {};

  // Traverse all materials in the model and assign textures
  model.traverse((node) => {
    if (node.isMesh) {
      node.material = createMaterialWithTexture(node.material);
    }
  });

  return model;
}

function createMaterialWithTexture(material) {
  if (material.map) {
    // Create a new material with the texture
    const newMaterial = new MeshStandardMaterial({ map: material.map });

    // Copy other properties from the original material if needed
    newMaterial.color.copy(material.color);
    // Set other desired properties

    return newMaterial;
  }

  return material;
}
