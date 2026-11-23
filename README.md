/* Profile Name */
.profile_name {
    color: #f8f9fa;
    font-size: 28px;
    font-weight: bold;
}

/* Navigation Bar */
.topmenu {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 20px;
    background-color: #333;
}

.topmenu a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    transition: 0.3s;
}

/* Required Hover Effects */
.topmenu a:hover {
    font-weight: bold;
    text-decoration: underline;
}

/* Profile Section */
.about-container {
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 30px;
}

.profile-image {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
}

/* Skills */
.skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.skill {
    padding: 20px;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 10px;
}

.skill img {
    width: 60px;
    height: 60px;
    object-fit: contain;
}
