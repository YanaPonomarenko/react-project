import type { ProfileType } from "../types/ProfileType";

function PersonalPage(prop: { profile: ProfileType }) {
    const { fullName, phone, email, city, workExperience, skills } = prop.profile;

    return (
        <div style={{ padding: '20px' }}>
            <h2>Personal Page</h2>

            <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
                <p><b>Full Name:</b> {fullName}</p>
                <p><b>Phone:</b> {phone}</p>
                <p><b>Email:</b> {email}</p>
                <p><b>City:</b> {city}</p>
                <p><b>Work Experience:</b> {workExperience}</p>
                <p><b>Skills:</b> {skills}</p>
            </div>
        </div>
    );
}

export { PersonalPage };