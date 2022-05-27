import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Qu'est ce que c'est SanteLib
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            SanteLib.tn est un site internet vous permettant de trouver des
            médecins et des praticiens (généraliste, spécialiste...) près de
            chez vous et de prendre rendez-vous avec eux, directement en ligne
            via la plateforme. SanteLib vous permet de centraliser les
            différents rendez-vous auprès des praticiens que vous avez sollicité
            par le biais de notre annuaire.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            Je souhaite Prendre un rendez vous avec un Medecin sur la plateform
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Pour prendre un rendez-vous avec un médecin via le site
            SanteLib.tn, effectuez la démarche suivante : 1/ Rendez-vous sur
            la page d'accueil SanteLib.tn ou sur la page de recherche et
            insérez dans le formulaire le nom ou la profession du professionnel
            de santé que vous recherchez ainsi que la zone où vous souhaiter
            effectuer vos recherches (code postal, ville,...) 2/ Choisir le
            professionnel dans la liste qui vous est proposée et cliquez sur
            "Prendre rendez-vous" sur la fiche du médecin que vous souhaiteriez
            consulter. 3/ Remplissez les éléments d'informations pour finaliser
            votre demande de consultation médicale dans la page suivante et
            validez. N'oubliez pas, plus vos informations sont précises, plus il
            sera facile d'obtenir un créneau de consultation.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Je n'arrive pas a acceder a l'agenda de mon medecin
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nous sommes une plateforme différente de MonDocteur.com, Keldoc,
            SanteLib,... SanteLib est un annuaire qui vous permet de
            retrouver des praticiens et d'enregistrer vos demandes de
            rendez-vous, des agents contactent ensuite les médecins que vous
            avez solicité pour obtenir un rendez-vous pour vous. Il est donc
            normal que vous n'ayez pas accès aux agendas des médecins comme
            c'est le cas sur des sites comme MonDocteur ou SanteLib, vu que ce
            n'est pas l'usage de notre site. Seuls les médecins affiliés à
            SanteLib possèdent un agenda accessible via notre site internet.
            Pour les médecins affiliés à d'autres services en ligne, nous nous
            efforçons de vous renvoyer vers leurs pages dédiées sur les autres
            plateformes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Mon medecin n'est pas sur la plateforme
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Vous aimeriez que votre médecin soit rajouté à la plateforme ou
            s'affilie à SanteLib.tn ? Vous pouvez lui parler du service et le
            renvoyer vers la page dédiée aux professionnels de santé qui lui
            permettra de nous contacter directement pour toute information
            complémentaire.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Qu'est ce que c'est SanteLib
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            SanteLib.tn est un site internet vous permettant de trouver des
            médecins et des praticiens (généraliste, spécialiste...) près de
            chez vous et de prendre rendez-vous avec eux, directement en ligne
            via la plateforme. SanteLib vous permet de centraliser les
            différents rendez-vous auprès des praticiens que vous avez sollicité
            par le biais de notre annuaire.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            j'ai un soucis medicale urgent,que faire
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Contactez immédiatement les services publics destinés aux urgences
            au plus vite, tels que le 112 ou le 15. Ils seront les plus
            habilités à vous aider le plus rapidement possible dans votre
            situation.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            je suis un professionel et je n'ai pas demandé a figurer sur le site
            SanteLib
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            SanteLib s’est donné pour mission de faciliter l’accès aux soins
            des patients. Pour délivrer l’information la plus complète qui soit,
            nous proposons sur notre site l’annuaire public des professions
            médicales et paramédicales référencées sur les sites officiels.
            SanteLib.tn n'utilise pas vos données médicales à des fins autres
            que la prise de rendez-vous et celles-ci ne sont pas réutilisées
            dans le cadre d’autres projets.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            j'ai rencontré un probleme technique
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nous sommes navrés de la gêne occasionnée, n'hésitez pas à nous
            remonter votre soucis via notre formulaire de contact disponible
            ici. Nous tâcherons de vous répondre au plus vite et de trouver une
            solution au problème que vous avez rencontré.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
