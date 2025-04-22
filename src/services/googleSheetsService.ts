import { ITeam } from "../types/ITeam";
import { parse } from "csv-parse/sync";
import { ITeamMember } from "../types/ITeamMember";
import { IArchivedMember } from "../types/IArchivedMember";
import { ISponsor } from "../types/ISponsor";
import { ISponsorType } from "../types/ISponsorType";
import { ITextReference } from "../types/ITextReference";
import { IImageReference } from "../types/IImageReference";
import { IProject } from "../types/IProject";
import { ISubTeam } from "../types/ISubTeam";

const teamsUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRcrs6dIfOD9t4LndmXn07Lurn95FdNO-54EhC4UzveA2-SeB9mqmg0WElVpKLZ49HkBWEQe9G5OOKK/pub?gid=1295316344&single=true&output=csv";

const membersUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRcrs6dIfOD9t4LndmXn07Lurn95FdNO-54EhC4UzveA2-SeB9mqmg0WElVpKLZ49HkBWEQe9G5OOKK/pub?gid=493487403&single=true&output=csv";
const archivedMembersUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRcrs6dIfOD9t4LndmXn07Lurn95FdNO-54EhC4UzveA2-SeB9mqmg0WElVpKLZ49HkBWEQe9G5OOKK/pub?gid=0&single=true&output=csv";
const sponsorTypesUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRcrs6dIfOD9t4LndmXn07Lurn95FdNO-54EhC4UzveA2-SeB9mqmg0WElVpKLZ49HkBWEQe9G5OOKK/pub?gid=1855790810&single=true&output=csv";
const sponsorsUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRcrs6dIfOD9t4LndmXn07Lurn95FdNO-54EhC4UzveA2-SeB9mqmg0WElVpKLZ49HkBWEQe9G5OOKK/pub?gid=1345440424&single=true&output=csv";

const textReferencesUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRcrs6dIfOD9t4LndmXn07Lurn95FdNO-54EhC4UzveA2-SeB9mqmg0WElVpKLZ49HkBWEQe9G5OOKK/pub?gid=578429191&single=true&output=csv";
const imageReferencesUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRcrs6dIfOD9t4LndmXn07Lurn95FdNO-54EhC4UzveA2-SeB9mqmg0WElVpKLZ49HkBWEQe9G5OOKK/pub?gid=559330674&single=true&output=csv";

const projectsUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRcrs6dIfOD9t4LndmXn07Lurn95FdNO-54EhC4UzveA2-SeB9mqmg0WElVpKLZ49HkBWEQe9G5OOKK/pub?gid=251163394&single=true&output=csv";
const subTeamsUrl =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRcrs6dIfOD9t4LndmXn07Lurn95FdNO-54EhC4UzveA2-SeB9mqmg0WElVpKLZ49HkBWEQe9G5OOKK/pub?gid=831565707&single=true&output=csv";

const gDriveRegex = /^https:\/\/drive.google.com\//;

export const getTeams = async () => {
  const response = await fetch(teamsUrl);
  const text = await response.text();

  const result: string[][] = parse(text, {
    delimiter: ",",
    from_line: 2,
  });

  const teams: ITeam[] = result.map((x) => ({ name: x[0] }));
  return teams;
};

export const getTeamMembers = async () => {
  const response = await fetch(membersUrl);
  const text = await response.text();

  const result: string[][] = parse(text, {
    delimiter: ",",
    from_line: 2,
  });

  const members: ITeamMember[] = result.map((x) => ({
    name: x[0],
    team: x[1],
    title: x[2] ? x[2] : undefined,
    imageUrl: x[3] && x[3].match(gDriveRegex) ? x[3] : undefined,
  }));

  return members;
};

export const getOldTeamMembers = async () => {
  const response = await fetch(archivedMembersUrl);
  const text = await response.text();

  const result: string[][] = parse(text, {
    delimiter: ",",
    from_line: 2,
  });

  const members: IArchivedMember[] = result.map((x) => ({
    name: x[0],
    team: x[1],
    title: x[2] ? x[2] : undefined,
    imageUrl: x[3] && x[3].match(gDriveRegex) ? x[3] : undefined,
    years: x[4]
      ? x[4].split(",").map((x) => Number.parseInt(x.trim()))
      : undefined,
  }));

  return members;
};

export const getSponsorTiers = async () => {
  const response = await fetch(sponsorTypesUrl);
  const text = await response.text();

  const result: string[][] = parse(text, {
    delimiter: ",",
    from_line: 2,
  });

  const sponsorTypes: ISponsorType[] = result.map((x) => ({ name: x[0] }));
  return sponsorTypes;
};

export const getSponsors = async () => {
  const response = await fetch(sponsorsUrl);
  const text = await response.text();

  const result: string[][] = parse(text, {
    delimiter: ",",
    from_line: 2,
  });

  const sponsors: ISponsor[] = result.map((x) => ({
    name: x[0],
    displayName: x[1],
    type: x[2],
    imageUrl: x[3] ? x[3] : undefined,
    link: x[4] && x[4] ? x[4] : undefined,
  }));

  return sponsors;
};

export const getTextReferences = async () => {
  const response = await fetch(textReferencesUrl);
  const text = await response.text();

  const result: string[][] = parse(text, {
    delimiter: ",",
    from_line: 2,
  });

  const references: ITextReference[] = result.map((x) => ({
    key: x[0],
    text: x[1],
  }));
  return references;
};

export const getImageReferences = async () => {
  const response = await fetch(imageReferencesUrl);
  const text = await response.text();

  const result: string[][] = parse(text, {
    delimiter: ",",
    from_line: 2,
  });

  const references: IImageReference[] = result.map((x) => ({
    key: x[0],
    imageUrl: x[1],
  }));
  return references;
};

export const getProjects = async () => {
  const response = await fetch(projectsUrl);
  const text = await response.text();

  const result: string[][] = parse(text, {
    delimiter: ",",
    from_line: 2,
  });

  const projects: IProject[] = result.map((x) => ({
    name: x[0],
    description: x[2],
    imageUrl: x[3] ? x[3] : undefined,
    year: x[1],
  }));
  return projects;
};

export const getSubTeams = async () => {
  const response = await fetch(subTeamsUrl);
  const text = await response.text();

  const result: string[][] = parse(text, {
    delimiter: ",",
    from_line: 2,
  });

  const subTeams: ISubTeam[] = result.map((x) => ({
    name: x[0],
    description: x[1],
    imageUrl: x[2] ? x[2] : undefined,
  }));

  return subTeams;
};
