function showUser(id) {
  if (id < 0) {
    throw new Error("Negative id is not allowed.");
  }
  
  return { id: id };
}

function showUsers(ids) {
  const validUsers = [];
  
  for (const id of ids) {
    try {
      const user = showUser(id);
      validUsers.push(user);
    } catch (error) {
      console.error(`Error for id ${id}: ${error.message}`);
    }
  }
  
  return validUsers;
}

const userIds = [1, 2, -3, 4, -5];
const users = showUsers(userIds);

console.log("Valid users:", users);
