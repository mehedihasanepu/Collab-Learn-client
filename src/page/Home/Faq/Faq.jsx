import useBackground from "../../../hooks/useBackground/useBackground";

const Faq = () => {
    const { bgLeftCorner } = useBackground()

    return (
        <div style={bgLeftCorner}>
            <div className="max-w-screen-lg mx-auto pt-20">
                <h3 className="text-4xl text-center font-bold pb-10 ">F&Q OF COLLAB LEARN</h3>

                <div className="collapse collapse-plus ">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How do I sign up and create an account?
                    </div>
                    <div className="collapse-content">
                        <p>You can sign up by clicking on the "Sign Up" button and providing your name, email address, and a password. An email verification may be required to activate your account.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus ">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How can I join or create a study group with my friends?
                    </div>
                    <div className="collapse-content">
                        <p>To join or create a study group, you can navigate to the "Groups" section on the website. You can search for existing groups or create your own by specifying a group name and inviting your friends to join.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus ">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How do I create an assignment within a study group?
                    </div>
                    <div className="collapse-content">
                        <p>After joining or creating a study group, go to the group's page and click on "Create Assignment." You can provide details, due dates, and any necessary resources for the assignment.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus ">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How do I complete an assignment?
                    </div>
                    <div className="collapse-content">
                        <p>To complete an assignment, visit the assignment page, and click on "Submit Assignment." You can upload your work or provide a link to your completed task.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-plus ">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Can I review my friends' assignments and provide feedback?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, you can. When you visit the assignment page, you can see your friends' submissions and provide feedback and grades based on the criteria set for the assignment.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus ">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How do I invite friends to join my study group?
                    </div>
                    <div className="collapse-content">
                        <p>You can invite friends to join your study group by going to the group settings and using the "Invite Friends" feature. You can send them invitations via email or share a unique group link.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;