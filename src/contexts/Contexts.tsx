import { createContext } from "react";
import { ITeam } from "../types/ITeam";
import { ITeamMember } from "../types/ITeamMember";
import { IArchivedMember } from "../types/IArchivedMember";
import { ISponsor } from "../types/ISponsor";
import { ISponsorType } from "../types/ISponsorType";
import { ITextReference } from "../types/ITextReference";
import { IImageReference } from "../types/IImageReference";
import { IProject } from "../types/IProject";
import { ISubTeam } from "../types/ISubTeam";

// #region Image Proxy
export interface GetProxyUrlOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: string;
  fit?: string;
  compression?: "fast";
  metadata?: "none" | "all";
}

export const defaultProxyUrlOptions: GetProxyUrlOptions = {
  width: 1024,
  height: 1024,
  quality: 80,
  format: "webp",
  fit: "scale-down",
  compression: "fast",
  metadata: "none",
};

export interface ImageProxyModel {
  isEnabled: boolean;
  getProxyUrl(url: string, options: GetProxyUrlOptions): string | undefined;
}

const imageProxyContextDefaultValue: ImageProxyModel = {
  isEnabled: false,
  getProxyUrl: () => {
    return undefined;
  },
};

export const ImageProxyContext = createContext<ImageProxyModel>(
  imageProxyContextDefaultValue,
);
// #endregion

// #region Data Context
export interface DataContextModel {
  teams: ITeam[];
  teamMembers: ITeamMember[];
  archivedMembers: IArchivedMember[];
  sponsors: ISponsor[];
  sponsorTypes: ISponsorType[];
  textReferences: ITextReference[];
  imageReferences: IImageReference[];
  projects: IProject[];
  subTeams: ISubTeam[];
  isLoading: boolean;
}

const dataContextDefaultValue: DataContextModel = {
  archivedMembers: [],
  teamMembers: [],
  teams: [],
  sponsors: [],
  sponsorTypes: [],
  textReferences: [],
  imageReferences: [],
  projects: [],
  subTeams: [],
  isLoading: true,
};

export const DataContext = createContext(dataContextDefaultValue);
// #endregion
