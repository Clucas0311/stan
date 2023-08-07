const COHORT_NAME = "2302-ACC-ET-WEB-PT-B";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

// --------------> FETCH ALL POSTS ---------------->
export const fetchAllPost = async () => {
  try {
    // First make our fetch request
    const response = await fetch(`${BASE_URL}/posts`);
    // Convert response object to json
    const result = await response.json();
    return result.data.posts;
  } catch (error) {
    console.error("Error /GET Post", error);
  }
};
