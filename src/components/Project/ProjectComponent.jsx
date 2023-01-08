import { Modal, TextInput, Label, Button } from 'flowbite-react';
import { useState } from 'react';
import data from './projectData';

export const ProjectComponent = () => {
    const [show, setShow] = useState(false)
    const [name, setName] = useState('')
    const [link, setLink] = useState('')
    const [image, setImage] = useState(null)

    const addProject = () => {
        const randomId = Math.floor(Math.random() * 100)
        data.push({
            id: randomId,
            name: name,
            link: link,
            image: URL.createObjectURL(image),
        })
        setName('')
        setLink('')
        setImage(null)
    }

    return (
        <div>
            <div>
                <h2 className="text-center mt-14 underline text-sky-600 text-3xl">All Projects</h2>
            </div>
            <div className="md:px-14 px-1 lg:px-32 mt-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-3 lg:gap-5 grid-rows-4">
                    {data.map((project) => 
                    <div key={project.id}>
                        <a target="_blank" href={project.link}>
                            <img className="h-[9rem] w-[20rem]" src={project.image} alt="cocktail" />
                        </a>
                        <div className="md:flex justify-center items-center">
                            <div><h2 className="capitalize md:text-lg">{project.name}</h2></div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
            {/* modal toggle */}
            <div className="more__project mb-10 flex justify-center">
                <button onClick={() => setShow(!show)} className="capitalize bg-sky-500 text-white mt-10 lg:mt-0 p-3 hover:bg-sky-400">Add more Project</button>
            </div>
            <Modal
                show={show}
                onClose={() => setShow(!show)}
                size="lg"
                popup={true}
            >
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            Add Project
                        </h3>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="project-name"
                                    value="Name"
                                />
                            </div>
                            <TextInput
                                id="name"
                                placeholder="project name"
                                type="text"
                                required={true}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="link"
                                    value="Link"
                                />
                            </div>
                            <TextInput
                                id="link"
                                type="text"
                                placeholder="link"
                                required={true}
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="image"
                                    value="Image or Screenshot"
                                />
                            </div>
                            <TextInput
                                id="image"
                                type="file"
                                placeholder="link"
                                required={true}
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </div>
                        <div className="w-full flex justify-center">
                            <Button onClick={addProject}>
                                Add Project
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}