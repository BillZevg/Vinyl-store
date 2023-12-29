import { Router } from "express";
import { sample_vinyls } from "../data";
import asynceHandler from "express-async-handler";
import { VinylModel } from "../models/vinyl.model";
import asyncHandler from "express-async-handler";

const router = Router();

router.get(
  "/seed",
  asynceHandler(async (req, res) => {
    const vinylsCount = await VinylModel.countDocuments();
    if (vinylsCount > 0) {
      res.send("Seed is already done!");
      return;
    }

    await VinylModel.create(sample_vinyls);
    res.send("Seed Is Done");
  })
);

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const vinyls = await VinylModel.find();
    res.send(vinyls);
  })
);

router.get(
  "/search/:searchTerm",
  asyncHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, "i");
    const vinyls = await VinylModel.find({ artist: { $regex: searchRegex } });
    res.send(vinyls);
  })
);

router.get(
  "/:vinylId",
  asyncHandler(async (req, res) => {
    const vinylId = req.params.vinylId;
    const vinyl = await VinylModel.findById(req.params.vinylId);
    res.send(vinyl);
  })
);

export default router;
