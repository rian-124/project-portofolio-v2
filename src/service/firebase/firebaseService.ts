import {
  About,
  Certificates,
  Experience,
  Hero,
  Projects,
} from "~/types/collection";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { COLLECTION_NAMES } from "~/utils/collection";
import { db } from "~/utils/firebase";
import { convertSpaceSlug } from "~/utils/convertSpaceSlug";

export async function getAbout(): Promise<About | null> {
  try {
    const ref = collection(db, COLLECTION_NAMES.ABOUT);
    const snap = await getDocs(ref);

    if (snap.empty) {
      console.log("Data is empty");
      return null;
    }

    const aboutsData = snap.docs[0].data() as About;

    return aboutsData;
  } catch (error) {
    console.error(`Something wrong with server: ${error}`);
    return null;
  }
}

export async function getHero(): Promise<Hero | null> {
  try {
    const ref = collection(db, COLLECTION_NAMES.HERO);
    const snap = await getDocs(ref);

    if (snap.empty) {
      console.log("Data is empty");
      return null;
    }

    const herosData = snap.docs[0].data() as Hero;

    return herosData;
  } catch (error) {
    console.error(`Something wrong with server: ${error}`);
    return null;
  }
}

export async function getExperience(): Promise<Experience[]> {
  try {
    const ref = collection(db, COLLECTION_NAMES.EXPERIENCE);
    const snap = await getDocs(ref);

    if (snap.empty) {
      console.log("Data is empty");
      return [];
    }

    const experiencesData: Experience[] = snap.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Experience),
    }));

    return experiencesData;
  } catch (error) {
    console.error(`Something wrong with server: ${error}`);
    return [];
  }
}

export async function getCertificates(): Promise<Certificates[]> {
  try {
    const ref = collection(db, COLLECTION_NAMES.CERTIFICATES);
    const snap = await getDocs(ref);

    const experiencesData: Certificates[] = snap.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Certificates),
    }));

    if (experiencesData.length === 0) {
      console.log("Data is empty");
      return [];
    }

    return experiencesData;
  } catch (error) {
    console.error(`Something wrong with server: ${error}`);
    return [];
  }
}

export async function getCertificatesWithLimit(): Promise<Certificates[]> {
  try {
    const ref = collection(db, COLLECTION_NAMES.CERTIFICATES);
    const querry = query(ref, limit(4));
    const snap = await getDocs(querry);

    const experiencesData: Certificates[] = snap.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Certificates),
    }));

    if (experiencesData.length === 0) {
      console.log("Data is empty");
      return [];
    }

    return experiencesData;
  } catch (error) {
    console.error(`Something wrong with server: ${error}`);
    return [];
  }
}

export async function getProjects(): Promise<Projects[]> {
  try {
    const ref = collection(db, COLLECTION_NAMES.PROJECTS);
    const snap = await getDocs(ref);

    const projectsData = snap.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Projects),
    }));

    if (projectsData.length === 0) {
      console.log("Data is empty");
      return [];
    }

    return projectsData;
  } catch (error) {
    console.error(`Something wrong with server: ${error}`);
    return [];
  }
}

export async function getProjectBySlug(slug : string): Promise<Projects | null> {
  try {
    const ref = collection(db, COLLECTION_NAMES.PROJECTS);
    const snap = await getDocs(ref);

    const projectSlugDoc = snap.docs.find(
      (doc) => convertSpaceSlug(doc.data().title) === slug
    );

    if (!projectSlugDoc) {
      console.log("Data is empty");
      return null;
    }

    const projectSlugData = projectSlugDoc.data() as Projects;

    return projectSlugData;
  } catch (error) {
    console.error(`Something wrong with server: ${error}`);
    return null;
  }
}
