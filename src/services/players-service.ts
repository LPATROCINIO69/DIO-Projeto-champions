import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import { deleteOnePlayer, findAllPlayers, findAndModifyPlayer, findPlayerById, inserPlayer } from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async () =>{
    const data = await findAllPlayers();
    let response = null;

    if (data){
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }
    return response ;
}

export const getPlayerByIdService = async (id:number) =>{
    const data = await findPlayerById(id);
    let response = null;

    if (data){
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }
    return response ;

}

export const createPlayerService = async (player:PlayerModel)=>{
    let response = null;
    if (player) {
        await inserPlayer(player);
        response = await HttpResponse.created();
    } else {
        response = await HttpResponse.badRequest();
    }
    return response
}

export const deletePlayerService= async (id:number) =>{
    let response= null;
    const deletedFlag:boolean = await deleteOnePlayer(id);
    if (deletedFlag) {
        response = await HttpResponse.ok({message:"deleted"});
    } else {
        response = await HttpResponse.badRequest();
    }
    return response;
}

export const updatePlayerService = async(id:number, statistics:StatisticsModel) =>{
    let response = null;
    const data = await findAndModifyPlayer(id, statistics);
    if (data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.badRequest();
    }
    return response;
}