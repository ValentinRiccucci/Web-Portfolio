<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class MainController extends AbstractController
{
    #[Route('/', name: 'app_main')]
    public function index(): Response
    {
        return $this->render('main/index.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }

    #[Route('/mockup', name: 'app_mockup')]
    public function mockup(): Response
    {
        return $this->render('main/mockup.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }

    #[Route('/projects', name: 'app_projects')]
    public function projects(): Response
    {
        return $this->render('main/projects.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }

    #[Route('/about-me', name: 'app_about')]
    public function aboutMe(): Response
    {
        return $this->render('main/about_me.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }

}
