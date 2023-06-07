import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import FormControl from '@mui/material/FormControl';
import Col from 'react-bootstrap/Col';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { findCategorieByID, getCategories } from "../../features/categorieSlice";
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import { useDispatch, useSelector } from "react-redux";
import { UploadFirebase } from '../../Utils/UploadFirebase';
import { updateArticle, getArticles } from "../../features/articleSlice"
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import { buildFormData } from "../../Utils/ConvertFormData";
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)
const Editarticle = ({ art }) => {
    const { categories } = useSelector((state) => state.storecategories);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [validated, setValidated] = useState(false);
    const [LibArt, setLibArt] = useState("");
    const [CodeArt, setCodeArt] = useState("");
    const [prix1, setprix1] = useState("");
    const [Descrip, setDescrip] = useState("");
    const [CodeCat, setCodeCat] = useState("");
    const [visible, setVisible] = useState("");
    const [image_web, setImage_web] = useState("");
    const [files, setFiles] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);
    const GetListCategories = async (idcat) => {
        dispatch(findCategorieByID(idcat));
    }
    /* // Dans le cas de Multer
    function isFile(obj) {
        return obj.constructor === File;
    }
    function blobToFile(blob, fileName) {
        // Create a new FormData object
        const formData = new FormData();
      
        // Append the Blob object to the FormData object with the specified file name
        formData.append('file', blob, fileName);
      
        // Extract the File object from the FormData object
        const file = formData.get('file');
      
        return file;
      } */
    const handleUpload = (event) => {
        if (!files[0].file) {
            alert("Please upload an image first!");
            console.log("Please upload an image first!")
        }
        console.log(files[0].file)
        resultHandleUpload(files[0].file, event);
    };
    const resultHandleUpload = async (image, event) => {
        try {
            await UploadFirebase(image).then((url) => {
                console.log(url);
                handleSubmit(event, url);
            })

        } catch (error) {
            console.log(error);
        }
    }
    const handleSubmit = async (event, url) => {
        event.preventDefault();
        setFiles(url);
        const article = {
            LibArt: LibArt,
            CodeArt: CodeArt,
            prix1: prix1,
            Descrip: Descrip,
            CodeCat: CodeCat,
            visible_web: visible,
            image_web: url
        }
        console.log(article.image_web);
        if (article.CodeArt === "") {
            article.CodeArt = art.CodeArt;
        }
        if (article.Descrip === "") {
            article.Descrip = art.Descrip;
        }
        if (article.LibArt === "") {
            article.LibArt = art.LibArt;
        }
        if (article.CodeCat === "") {
            article.CodeCat = art.CodeCat;
        }
        if (article.visible_web === "") {
            article.visible_web = art.visible_web;
        }
        if (article.prix1 === "") {
            article.prix1 = art.prix1;
        }
        if (article.image_web === undefined) {
            console.log("the article image is undefined")
            console.log(art.image_web)
            setFiles(art.image_web)
            setImage_web(art.image_web)
            article.image_web = art.image_web
        }
        else {
            console.log("Vous avez changer l'image de votre article")
            console.log(article.image_web)
            setFiles(article.image_web)
        }
        /*  if (isFile(article.imagepath)) {
             console.log('It is a File no need to change')
             console.log(files[0].file.name)
         }
         else {
             console.log('It is a Blob, change it to a File')
             article.imagepath = blobToFile(files[0].file, files[0].file.name);
         } */
        console.log(article.image_web);
        const formData = new FormData();
        buildFormData(formData, article);
        await dispatch(updateArticle(formData))
            .then(res => {
                console.log("edit OK", res);
                setShow(false);
                setLibArt("");
                setprix1("");
                setDescrip("");
                setCodeCat("");
                setFiles("");
                setImage_web("");
                setVisible("");
                setValidated(false);
            })
        await dispatch(getArticles());
        setValidated(true);
    };
    return (
        <>
            <span
                onClick={handleShow}
                style={{ cursor: 'pointer' }}
            >
                <NoteAltOutlinedIcon color='success' />
            </span>
            <Modal show={show} onHide={handleClose}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title> <h1 align="center">Modification Article</h1></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container w-100 d-flex justify-content-center">
                            <div>
                                <div className='form mt-3'>
                                    <Row className="mb-2">
                                        <Form.Label>Description : {`${art.Descrip}`}</Form.Label>
                                        <InputGroup hasValidation>
                                            <Form.Control
                                                type="text"
                                                required
                                                placeholder="Modifier la description de l'article"
                                                value={Descrip}
                                                onChange={(e) => setDescrip(e.target.value)}
                                            />
                                        </InputGroup>
                                    </Row>
                                    <Row className="mb-2">
                                        <Form.Group as={Col} md="6">
                                            <Form.Label>Désignation : {`${art.LibArt}`}</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Modifier le nom de l'article"
                                                value={LibArt}
                                                onChange={(e) => setLibArt(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Form.Group className="col-md-6">
                                            <Form.Label>visible dans menu : {`${art.visible_web}`}</Form.Label>
                                            <Form.Control
                                            as="select"
                                            required
                                            value={visible}
                                            onChange={(e) => setVisible(e.target.value)}
                                        >
                                            <option value="">Visibilité dans le web</option>
                                            <option value="1">Visible</option>
                                            <option value="0">Non visible</option>
                                        </Form.Control>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-2">
                                        <Form.Group className="col-md-6 ">
                                            <Form.Label>Code categorie : {`${art.CodeCat}`}</Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="Modifier la categorie de l'article"
                                                value={CodeCat}
                                                onChange={(e) => setCodeCat(e.target.value)}
                                            />
                                            <FormControl style={{ width: 200 }}>
                                                <TextField
                                                    select
                                                    label="Catégories"
                                                    variant="outlined"
                                                    value={CodeCat}
                                                    style={{ width: "200", marginLeft: 8 }}
                                                    onChange={(event) => {
                                                        setCodeCat(event.target.value); GetListCategories(event.target.value)
                                                    }}
                                                    helperText="Sélectionner une catégorie"
                                                >
                                                    {
                                                        categories ?
                                                            categories.map(cat =>
                                                                <MenuItem key={cat.CodeCat}
                                                                    value={cat.CodeCat}>{cat.DesCat}
                                                                </MenuItem>
                                                            )
                                                            : null
                                                    }
                                                </TextField>
                                            </FormControl>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6">
                                            <Form.Label>Prix : {`${art.prix1}`}</Form.Label>
                                            <Form.Control
                                                type="number"
                                                placeholder="Modifier le Prix de l'article"
                                                value={prix1}
                                                onChange={(e) => setprix1(e.target.value)}
                                            />
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3">
                                        <Form.Group as={Col} md="6">
                                            <img
                                                src={`${art.image_web}`} width={150} height={150}
                                                alt="" />
                                        </Form.Group>
                                        <Form.Group as={Col} md="6">
                                            <Form.Label>changer l'image de l'article</Form.Label>
                                            <FilePond
                                                type="file"
                                                files={files}
                                                allowMultiple={false}
                                                onupdatefiles={setFiles}
                                                labelIdle='<span class="filepond--label-action"> Cliquer ici pour télécharger une nouvelle image</span>'
                                            />
                                        </Form.Group>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Fermer
                        </Button>
                        <Button variant="primary" type="submit" onClick={(event) => handleUpload(event)}>Modifier</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}
export default Editarticle