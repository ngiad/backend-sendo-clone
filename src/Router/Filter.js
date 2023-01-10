import express  from "express";
import { GetProductFilter } from "../Controllers/FilterController.js";

const FilterRouter = express.Router()


FilterRouter.get("/",GetProductFilter)


export default FilterRouter