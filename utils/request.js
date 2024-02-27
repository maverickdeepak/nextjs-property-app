const API_DOMAIN = process.env.NEXT_PUBLIC_API_DOMAIN || null;

//fetch all property

async function fetchProperties() {
  try {
    // handle the case where domain is not available yet
    if (!API_DOMAIN) {
      return [];
    }

    const res = await fetch(`${API_DOMAIN}/properties`);
    if (!res.ok) {
      throw new Error("Failed to fetch properties");
    }
    return res.json();
    
  } catch (error) {
    console.log(error);
    return [];
  }
}

// fetch single property

async function fetchProperty(id) {
  try {
    // handle the case where domain is not available yet
    if (!API_DOMAIN) {
      return null;
    }

    const res = await fetch(`${API_DOMAIN}/properties/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch property");
    }
    return res.json();

  } catch (error) {
    console.log(error);
    return null;
  }
}

export { fetchProperties, fetchProperty };
