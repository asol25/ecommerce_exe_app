<?php 
namespace app\core;

use app\core\middlewares\IMiddleware;

class Controller
{
    public string $layout = 'main';
    public string $action = '';

    protected array $middlewares = [];

    public function setLayout($layout): void
    {
        $this->layout = $layout;
    }

    public function render($view, $params = []): void
    {
        Application::$app->router->renderView($view, $params);
    }

    public function registerMiddleware(IMiddleware $middleware)
    {
        $this->middlewares[] = $middleware;
    }

    public function getMiddlewares(): array
    {
        return $this->middlewares;
    }
}
?>