import { ITeamMember } from "./ITeamMember";

export interface IArchivedMember extends ITeamMember {
  years?: number[];
}
