export const getAllActivityData = async (validJson) => {
  try {
    const res = await fetch("http://localhost:4400/activity", {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error("Network issue");
    }
    const data = await res.json();
    localStorage.setItem("auth", data.token);
    //route to main page
    /**
     * *
     * *
     * *
     * *
     * *
     * *
     * */
  } catch (error) {
    console.log(error);
  }
};

export const createNewActivity = async (validJson) => {
  try {
    const res = await fetch("http://localhost:4400/activity/:activityId", {
      method: "POST",
    //   headers: {"Content-Type": "application/json"},
    //   body: JSON.stringify(validJson)
    });
    if (!res.ok) {
      throw new Error("Network issue");
    }
    const data = await res.json();
    localStorage.setItem("auth", data.token);
    //route to main page
    /**
     * *
     * *
     * *
     * *
     * *
     * *
     * */
  } catch (error) {
    console.log(error);
  }
};

// "http://localhost:5500/activity/:activityId"
