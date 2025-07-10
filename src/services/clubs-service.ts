import { findAllClubs } from "../repositories/clubs-repository";
import * as HttpResponse from "../utils/http-helper";

export const getClubService = async () =>{
    const data = await findAllClubs();
    const response = HttpResponse.ok(data);
    return response;
}