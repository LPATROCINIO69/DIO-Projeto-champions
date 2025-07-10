import {Router} from "express";
import { deletePlayer, getPlayer, getPlayerById, postPlayer, updatePlayer } from "../controllers/players-controller";
import { getClubs } from "../controllers/clubs-controller";

const router = Router();

router.get("/players",getPlayer);               // busca a lista de jogadores
router.get("/players/:id",getPlayerById);       // busca um jogador pelo id
router.post("/players", postPlayer);            // inclui um novo jogador ao BD
router.delete("/players/:id",deletePlayer);     // Exclui um jogador pelo id
router.patch("/players/:id",updatePlayer);      // Atualiza as informações de um jogador


router.get("/clubs", getClubs);                         // busca a lista de clubs

export default router;