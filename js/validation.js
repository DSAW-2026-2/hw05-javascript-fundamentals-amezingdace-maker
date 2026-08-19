export function validateForm(name, email, password) {
  const errors = {
    name: "",
    email: "",
    password: ""
  };

  // Validar nombre
  if (name.trim() === "") {
    errors.name = "El nombre es obligatorio.";
  } else if (name.trim().length < 3) {
    errors.name = "El nombre debe tener al menos 3 caracteres.";
  }

  // Validar correo
  if (email.trim() === "") {
    errors.email = "El correo electrónico es obligatorio.";
  } else if (!email.includes("@") || !email.includes(".")) {
    errors.email = "Ingresa un correo electrónico válido.";
  }

  // Validar contraseña
  if (password.trim() === "") {
    errors.password = "La contraseña es obligatoria.";
  } else if (password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres.";
  }

  return errors;
}