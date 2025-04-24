import React, { useState } from "react";
import { useEffect } from "react";
import { ITeam } from "../types/ITeam";
import { ITeamMember } from "../types/ITeamMember";
import { IArchivedMember } from "../types/IArchivedMember";
import {
  getImageReferences,
  getOldTeamMembers,
  getProjects,
  getSponsors,
  getSponsorTiers as getSponsorTypes,
  getSubTeams,
  getTeamMembers,
  getTeams,
  getTextReferences,
} from "../services/googleSheetsService";
import { ISponsorType } from "../types/ISponsorType";
import { ISponsor } from "../types/ISponsor";
import { ITextReference } from "../types/ITextReference";
import { IImageReference } from "../types/IImageReference";
import { IProject } from "../types/IProject";
import { ISubTeam } from "../types/ISubTeam";
import { DataContext, DataContextModel } from "./Contexts";

type Props = {
  children?: React.ReactNode;
};

export const DataContextProvider = (props: Props) => {
  const [teams, setTeams] = useState<ITeam[]>([]);
  const [teamMembers, setTeamMembers] = useState<ITeamMember[]>([]);
  const [archivedMembers, setArchivedMembers] = useState<IArchivedMember[]>([]);
  const [sponsorTypes, setSponsorTypes] = useState<ISponsorType[]>([]);
  const [sponsors, setSponsors] = useState<ISponsor[]>([]);
  const [textReferences, setTextReferences] = useState<ITextReference[]>([]);
  const [imageReferences, setImageReferences] = useState<IImageReference[]>([]);
  const [projects, setProjects] = useState<IProject[]>([]);
  const [subTeams, setSubTeams] = useState<ISubTeam[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const loadData = async () => {
      const promises: Promise<unknown>[] = [];
      promises.push(getTeamsPromise());
      promises.push(getTeamMembersPromise());
      promises.push(getArchivedMembersPromise());
      promises.push(getSponsorTypesPromise());
      promises.push(getSponsorsPromise());
      promises.push(getTextReferencesPromise());
      promises.push(getImageReferencesPromise());
      promises.push(getProjectsPromise());
      promises.push(getSubTeamsPromise());

      await Promise.all(promises);
      setLoading(false);
    };

    const interval = setInterval(
      () => {
        console.log("refreshing");
        loadData();
      },
      1 * 60 * 1000,
    ); // 1 minutes

    // #region Promises
    const getTeamsPromise = async () => {
      const teams = await getTeams();
      setTeams(teams);
    };
    const getTeamMembersPromise = async () => {
      const members = await getTeamMembers();
      setTeamMembers(members);
    };
    const getArchivedMembersPromise = async () => {
      const members = await getOldTeamMembers();
      setArchivedMembers(members);
    };
    const getSponsorTypesPromise = async () => {
      const sponsorTypes = await getSponsorTypes();
      setSponsorTypes(sponsorTypes);
    };
    const getSponsorsPromise = async () => {
      const sponsors = await getSponsors();
      setSponsors(sponsors);
    };
    const getTextReferencesPromise = async () => {
      const references = await getTextReferences();
      setTextReferences(references);
    };
    const getImageReferencesPromise = async () => {
      const references = await getImageReferences();
      setImageReferences(references);
    };
    const getProjectsPromise = async () => {
      const projects = await getProjects();
      setProjects(projects);
    };
    const getSubTeamsPromise = async () => {
      const subTeams = await getSubTeams();
      setSubTeams(subTeams);
    };
    // #endregion
    loadData();

    return () => {
      clearInterval(interval);
    };
  }, []);

  const value: DataContextModel = {
    teams,
    teamMembers,
    sponsors,
    sponsorTypes,
    archivedMembers,
    isLoading: loading,
    textReferences,
    imageReferences,
    projects,
    subTeams,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
