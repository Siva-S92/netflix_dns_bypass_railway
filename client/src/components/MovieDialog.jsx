import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/movieSlice";
import VideoBackground from "./VideoBackground";

export default function MovieDialog() {
  const { open, id } = useSelector((store) => store.movies);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setOpen(false));
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        
      >
        <DialogContent>
          <VideoBackground movieId={id} bool={true} />
          {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
          asperiores eum illum atque omnis possimus similique molestias
          consequatur. Libero odio distinctio iure quam, omnis delectus
          doloremque veniam repellat fugit laborum soluta deleniti aliquam
          exercitationem in doloribus nesciunt, quo repellendus ut. Vitae nulla
          qui doloribus laudantium modi expedita eius cupiditate sed veritatis
          impedit quod nostrum amet distinctio eos accusamus commodi earum,
          tempora optio enim assumenda aliquid illo blanditiis! Quod eveniet
          atque, adipisci recusandae expedita facere debitis commodi harum odit
          assumenda laboriosam, velit distinctio accusamus molestiae ipsam vero
          vitae dolore perferendis cupiditate provident? Sapiente mollitia,
          sequi quia quibusdam optio earum dolore est, unde dolor, sint saepe.
          Eveniet itaque animi molestiae quas natus eaque laudantium unde
          accusantium molestias. Consequuntur rerum cupiditate quas ut dolorem,
          ipsa in natus mollitia recusandae esse molestias ex! Iure dolorum
          laborum reprehenderit suscipit deleniti totam! In, nostrum! Nemo,
          distinctio dolore expedita harum ullam assumenda ex dicta! Ducimus eos
          veritatis cupiditate odio ratione? Harum corporis distinctio enim ab
          quasi, blanditiis neque illo aspernatur quisquam vel corrupti? Beatae
          deleniti accusamus consequatur harum iusto illo ea esse delectus, hic,
          animi quia repellat pariatur eligendi quidem aperiam, laboriosam
          consequuntur molestiae assumenda fugiat sed quae? Ipsa consectetur
          sint esse repellendus doloremque tempore delectus ratione veniam quae
          rerum repudiandae maiores, fuga asperiores quas minima magnam
          voluptatibus mollitia magni porro sequi. Veniam illum officiis
          doloremque corporis, sapiente quae veritatis sit animi voluptatum
          sint? Eos velit accusamus laudantium repellat nobis odio
          reprehenderit, temporibus excepturi aut facilis laboriosam placeat
          natus quidem at non assumenda? Temporibus, at accusamus in assumenda
          quae neque facere error tempore dolore commodi vitae harum aspernatur
          dicta beatae sint ea. Totam consectetur labore aliquam odit accusamus
          dolorum quo nam inventore blanditiis possimus repellat quod voluptatem
          ipsam modi enim praesentium voluptatum, odio magnam ullam quam!
          Consectetur dolorum mollitia impedit possimus expedita accusantium
          error, soluta temporibus itaque laboriosam voluptate molestias
          officia, nisi necessitatibus. Numquam mollitia ut laborum ipsa vel
          illo iure accusantium, maxime omnis, delectus, beatae velit magni.
          Facilis dolore inventore quam perspiciatis amet at optio eius.
          Consectetur, voluptates quae labore facere itaque ea ipsa accusamus
          ipsum reiciendis molestiae ab soluta, atque eius odit, ullam harum
          aspernatur incidunt nobis assumenda hic. Numquam quae ex reprehenderit
          commodi molestias deleniti. Ratione laborum architecto iure rem amet
          eum beatae soluta reiciendis dolorem odit saepe deserunt voluptate
          delectus corporis ex dolores id aperiam, recusandae nesciunt pariatur,
          dignissimos non commodi ipsam sint. Facere nisi provident in dolores
          veniam. Vero illum ea molestias, porro modi consequuntur! Molestias,
          veritatis. Molestias doloremque aperiam ducimus nihil inventore
          repellat omnis consequatur nulla facere! Numquam in sit, tempore
          laudantium error quam harum itaque maxime necessitatibus natus
          adipisci consequuntur? Error eum modi veniam! Rem nesciunt commodi,
          adipisci corrupti voluptate est magni, error atque, molestiae
          repudiandae officia saepe. Aperiam quia quae ullam? Odit nostrum
          totam, beatae cumque odio perferendis nam libero iste molestias culpa
          sed tempore ad quasi fuga ipsa eligendi, atque similique officiis
          sequi a magnam, veniam temporibus repellat in! Saepe, minima amet!
          Maiores, at molestiae explicabo nulla culpa eligendi? Officiis
          incidunt est, nostrum nulla delectus et assumenda rerum? */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
