/*
jQuery Foundation projects are released under the terms of the license specified in the project's repo or if not specified, under the MIT license.

The MIT License is simple and easy to understand and it places almost no restrictions on what you can do with a jQuery Foundation project.

You are free to use any jQuery Foundation project in any other project (even commercial projects) as long as the copyright header is left intact.
*/
$(document).ready(function(){var e=!1;e="slide"==fancy_element.type||"fade"==fancy_element.type?!0:!1,$(fancy_element.element+"[fancy=1]").each(function(){$(this).clone().insertAfter(this).css("display","none").css(fancy_element.set,fancy_element.to),$(this).next(fancy_element.element+"[fancy=1]").attr("fancy","2")}),$(fancy_element.element+"[fancy=1]").mouseenter(function(){e?"fade"==fancy_element.type?($(this).css("display","none"),$(this).next(fancy_element.element+"[fancy=2]").fadeIn(fancy_element.speed)):($(this).css("display","none"),$(this).next(fancy_element.element+"[fancy=2]").slideDown(fancy_element.speed)):($(this).css("display","none"),$(this).next(fancy_element.element+"[fancy=2]").toggle(fancy_element.type))}),$(fancy_element.element+"[fancy=2]").mouseout(function(){e?"fade"==fancy_element.type?($(this).css("display","none"),$(this).prev(fancy_element.element+"[fancy=1]").fadeIn(fancy_element.speed)):($(this).css("display","none"),$(this).prev(fancy_element.element+"[fancy=1]").slideDown(fancy_element.speed)):($(this).css("display","none"),$(this).prev(fancy_element.element+"[fancy=1]").toggle(fancy_element.type))})});
