import { post } from "../../api";


export const createSprint = (sprintData: any) => {
    console.log("Duomenys papuola i API ", sprintData); 
  post("/sprint", sprintData)
  .then((response) => {
    console.log('response is', response);
  })
  .catch((error) => {
    // console.log('klaida', error);
  });
  
}



/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */

// import { post } from "../../api";

// export const createSprint = (sprint: unknown) => post("/sprint", undefined, sprint);